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

    const findFirst = await prisma.certificates.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json(
        { error: 'Certificate not found' },
        { status: 404 }
      );
    }

    const certificate = await prisma.certificates.update({
      where: {
        id: params.id,
      },
      data: {
        ...payload,
      },
    });

    return NextResponse.json(
      {
        message: 'Certificate updated successfully',
        data: certificate,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating certificate' },
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

    const findFirst = await prisma.certificates.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json(
        { error: 'Certificate not found' },
        { status: 404 }
      );
    }

    await prisma.certificates.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(
      {
        message: 'Certificate deleted successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting certificate' },
      { status: 500 }
    );
  }
}
