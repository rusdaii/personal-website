import { NextRequest, NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const certificates = await prisma.certificates.findMany();

    return NextResponse.json(
      {
        message: 'Certificates fetched successfully',
        data: certificates,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching certificates' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (!accessToken || !verifyJwt(accessToken)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const certificate = await prisma.certificates.create({
      data: {
        ...payload,
      },
    });

    return NextResponse.json(
      {
        message: 'Certificate created successfully',
        data: certificate,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating certificate' },
      { status: 500 }
    );
  }
}
