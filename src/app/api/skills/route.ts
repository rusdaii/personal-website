import { NextRequest, NextResponse } from 'next/server';

import { verifyJwt } from '@/lib/jwt';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const skills = await prisma.skills.findMany();
    return NextResponse.json(
      {
        message: 'Skills fetched successfully',
        data: skills,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching skills' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const accessToken = request.headers.get('Authorization')?.split(' ')[1];

    if (accessToken && verifyJwt(accessToken)) {
      const skill = await prisma.skills.create({
        data: {
          ...body,
        },
      });

      return NextResponse.json(
        { message: 'Skill created successfully', data: skill },
        { status: 201 }
      );
    }

    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating skill' },
      { status: 500 }
    );
  }
}
