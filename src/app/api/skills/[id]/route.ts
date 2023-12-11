import { NextRequest, NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

import { paramsType } from './types';

export async function PUT(
  request: NextRequest,
  { params }: { params: paramsType }
) {
  try {
    const body = await request.json();

    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const findFirst = await prisma.skills.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json({ error: 'Skill not found' }, { status: 404 });
    }

    const skill = await prisma.skills.update({
      where: {
        id: params.id,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(
      { message: 'Skill updated successfully', data: skill },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating skill' },
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

    const findFirst = await prisma.skills.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json({ error: 'Skill not found' }, { status: 404 });
    }

    await prisma.skills.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting skill' },
      { status: 500 }
    );
  }
}
