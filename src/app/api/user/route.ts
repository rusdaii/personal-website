import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const dataUser = 'Rusdi' || 'Rusydi';

    const users = await prisma.user.findFirst({
      where: {
        name: dataUser,
      },
    });

    return NextResponse.json({
      message: 'Users fetched successfully',
      data: {
        id: users?.id,
        name: users?.name,
        email: users?.email,
        phone: users?.phone,
        resumeUrl: users?.resumeUrl,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching users' },
      { status: 500 }
    );
  }
}
