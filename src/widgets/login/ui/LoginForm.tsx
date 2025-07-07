'use client';

import LoginButton from './LoginButton';
import LoginInput from './LoginInput';

import { useForm } from 'react-hook-form';
import type { Login } from '../types';
import { useFetchLogin } from '../api';
import { useState } from 'react';
import { ERROR_MESSAGE } from '../model';
import { useRouter } from 'next/navigation';
import { PATH } from '@/shared/constants';

export default function LoginForm() {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const { register, handleSubmit } = useForm<Login>();
  const { mutate } = useFetchLogin();

  const onSubmit = (data: Login) => {
    mutate(data, {
      onSuccess: data => {
        setError('');
        sessionStorage.setItem('userToken', data as string);
        router.push(PATH.HOME);
      },
      onError: error => setError(error.message),
    });
  };

  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-h3 text-center font-medium">로그인</p>
      <LoginInput
        isError={error.includes('User')}
        placeholder="아이디"
        {...register('email')}
      />
      <LoginInput
        isError={error.includes('Incorrect')}
        placeholder="비밀번호"
        type="password"
        {...register('password')}
      />
      <LoginButton className="bg-m-100 flex justify-center font-medium">
        로그인
      </LoginButton>
      {error && (
        <p className="text-red-500">
          {ERROR_MESSAGE[error] ?? '로그인에 실패했습니다.'}
        </p>
      )}
    </form>
  );
}
