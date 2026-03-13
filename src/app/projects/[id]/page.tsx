'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ProjectDetailPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className='hidden'></div>
  );
};

export default ProjectDetailPage;
