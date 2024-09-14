import React from 'react'
import { SECTION_TITLE } from '@/constants/constants'
import Layout from '../common/Layout'

const Contact = () => {
  return (
    <Layout title={SECTION_TITLE.contact}>
      <div className="w-full h-full flex flex-col my-5">
      <h1 className='text-pureWhite text-[40px] font-bold mb-5'>제 소개를 봐주셔서 정말 감사합니다!</h1>
      <h2 className='text-2xl text-white font-medium'>함께 하고 싶은 동료 개발자가 되기 위해, <br/>
      신뢰를 줄 수 있는 개발자가 되기 위해 끊임 없이 도전하겠습니다</h2>
      <div className="w-full h-11 rounded-lg bg-pureWhite px-3 mt-10 font-extrabold flex items-center text-primary text-xl">
          방명록
        </div>
      <h3 className='text-white font-light text-base my-5'>방명록을 통해 피드백 또는 응원의 메세지를 주신다면 정말 큰 도움이 될 것 같습니다!
        <br/> 오늘도 행복한 하루 되세요 😊
      </h3>
      <div className='w-full h-2/4 rounded-lg bg-white'>
      </div>
      </div>
    </Layout>  )
}

export default Contact