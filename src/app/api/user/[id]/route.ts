import { NextRequest, NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

import { paramsType } from './types';

export async function PUT(
  request: NextRequest,
  { params }: { params: paramsType }
) {
  try {
    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const findFirst = await prisma.user.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!findFirst) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const body = await request.json();

    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        ...body,
      },
    });

    // eslint-disable-next-line no-unused-vars
    const { password, ...result } = user;

    return NextResponse.json({
      message: 'User updated successfully',
      data: result,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}
