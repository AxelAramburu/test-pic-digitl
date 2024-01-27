import React, { Suspense } from 'react'
import Loading from '../components/Loading'

function Page({ params }: { params: { id: number } }) {
    return (
      <Suspense fallback={<Loading />}>
        <div>{params.id}You&apos;re lose</div>
      </Suspense>
    )
  }

export default Page