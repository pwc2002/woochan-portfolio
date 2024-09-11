import React from 'react'
import Layout from '../common/Layout'
import { SECTION_TITLE } from '@/constants/constants'

const Projects = () => {
  return (
    <Layout title={SECTION_TITLE.project}>
      <div className="w-full h-full flex justify-center flex-col"></div>
    </Layout>
  )
}

export default Projects