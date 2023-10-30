import { Button } from '@/components/atoms';
import { InputTest } from '@/components/organisms';
import { Input } from '@/components/atoms';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center p-24 ">
      <>
        <Input />
        <InputTest />
      </>
    </main>
  );
}
