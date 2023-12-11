import { NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

import { paramsType } from './types';

export async function PUT(
  request: Request,
  { params }: { params: paramsType }
) {
  try {
    const payload = await request.json();

    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const findFirst = await prisma.educations.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json(
        { error: 'Education not found' },
        { status: 404 }
      );
    }

    const education = await prisma.educations.update({
      where: {
        id: params.id,
      },
      data: {
        ...payload,
      },
    });

    return NextResponse.json(
      {
        message: 'Education updated successfully',
        data: education,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating education' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: paramsType }
) {
  try {
    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const findFirst = await prisma.educations.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json(
        { error: 'Education not found' },
        { status: 404 }
      );
    }

    await prisma.educations.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(
      {
        message: 'Education deleted successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting education' },
      { status: 500 }
    );
  }
}
