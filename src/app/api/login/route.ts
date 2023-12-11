import { NextRequest, NextResponse } from 'next/server';

import { signJwtAccessToken } from '@/lib/jwt';
import prisma from '@/lib/prisma';

const bcrypt = require('bcrypt');

export type LoginPayload = {
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  try {
    const payload: LoginPayload = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (user && (await bcrypt.compare(payload.password, user.password))) {
      // eslint-disable-next-line no-unused-vars
      const { id, role } = user;

      const userData = {
        id,
        role,
      };

      const accessToken = signJwtAccessToken(userData);

      const result = {
        ...userData,
      };

      return NextResponse.json({
        message: 'Login successful',
        data: {
          ...result,
          accessToken,
        },
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error logging in' }, { status: 500 });
  }
}
