import { NextRequest, NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

import { paramsType } from './types';

export async function PUT(
  request: NextRequest,
  { params }: { params: paramsType }
) {
  try {
    const payload = await request.json();

    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const findFirst = await prisma.projects.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const project = await prisma.projects.update({
      where: {
        id: params.id,
      },
      data: {
        ...payload,
      },
    });

    return NextResponse.json(
      {
        message: 'Project updated successfully',
        data: project,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating project' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: paramsType }
) {
  try {
    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const findFirst = await prisma.projects.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    await prisma.projects.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(
      {
        message: 'Project deleted successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting project' },
      { status: 500 }
    );
  }
}
