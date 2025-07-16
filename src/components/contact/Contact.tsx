import React from 'react'
import { SECTION_TITLE } from '@/constants/constants'
import Layout from '../common/Layout'
import { SlideUpScroll } from '../animation/SlideUp'

const Contact = () => {
  return (
    <Layout title={SECTION_TITLE.contact}>
      <div className="w-full h-auto flex flex-col my-10">
        <SlideUpScroll delay={0.1}>
      <h1 className='text-pureWhite font-bold mb-5
      lg:text-4xl
      md:text-3xl
      text-xl
      '>제 소개를 봐주셔서 정말 감사합니다!</h1>
      </SlideUpScroll>
      <SlideUpScroll delay={0.15}>
      <h2 className='
      lg:text-2xl
      md:text-2xl
      text-lg
      
      text-white font-medium'>함께 하고 싶은 동료 개발자가 되기 위해, <br/>
      신뢰를 줄 수 있는 개발자가 되기 위해 끊임 없이 도전하겠습니다</h2>
      </SlideUpScroll>
      <SlideUpScroll delay={0.2}>
      <div className="w-full h-11 rounded-lg bg-pureWhite px-3 mt-10 font-extrabold flex items-center text-primary text-xl">
          연락처
        </div>
        </SlideUpScroll>
        <SlideUpScroll delay={0.25}>
      <h3 className='text-white font-light my-5
      md:text-base
      text-sm
      '>이메일: pwc2002@inha.edu<br/>
        GitHub: https://github.com/pwc2002<br/>
        LinkedIn: https://www.linkedin.com/in/우찬-박-842756349/<br/>
        오늘도 행복한 하루 되세요 😊
      </h3>
      </SlideUpScroll>
      </div>
    </Layout>  )
}

export default Contact