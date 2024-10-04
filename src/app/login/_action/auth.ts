'use server';

import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const authSchema = z.object({
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export const adminLogin = async (prevData: unknown, formData: FormData) => {
  const result = authSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      success: null,
      db: null,
    };
  }

  const data = result.data;

  

  if (process.env.NEXT_PUBLIC_ADMIN_PASSWORD !== data.password) {
    return { error: null, success: null, db: 'Invalid password' };
  }

  const userId = crypto.randomUUID();

  await createSession(userId.toString());

  return redirect('/');
};

export async function logout() {
  await deleteSession();
  redirect('/login');
}
