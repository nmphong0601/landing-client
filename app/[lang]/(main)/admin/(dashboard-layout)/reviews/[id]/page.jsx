'use client'

import { useTitle, useTranslate } from '@/hooks'
import { useGetSingleReviewQuery } from '@/store/services'

import { BigLoading, PageContainer, ReveiwCard } from '@/components'

const SingleCommentPage = ({ params: { id } }) => {
  const trans = useTranslate()
  useTitle(trans.review.detail)
  //? Get Single Review Data
  const { data, isLoading } = useGetSingleReviewQuery({
    id,
  })

  //? Render(s)
  return (
    <main>
      <PageContainer title={trans.review.detail}>
        {isLoading ? (
          <div className="px-3 py-20">
            <BigLoading />
          </div>
        ) : data ? (
          <section className="px-3 py-3 mx-auto lg:px-8">
            <ReveiwCard singleComment item={data.data} />
          </section>
        ) : null}
      </PageContainer>
    </main>
  )
}

export default SingleCommentPage
