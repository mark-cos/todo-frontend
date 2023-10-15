import { Button } from '@/components/atoms';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center p-24">
      <div className="w-15 flex-1">
        <Button>버튼</Button>
      </div>
      <div className="w-15 flex-1">
        <Button variant="contained">버튼</Button>
      </div>
      <div className="w-15 flex-1">
        <Button variant="outlined">버튼</Button>
      </div>
    </main>
  );
}
