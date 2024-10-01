'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ProjectDetailPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className='hidden'>프론트엔드 개발자 이창우</div>
  );
};

export default ProjectDetailPage;
