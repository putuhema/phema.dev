import Container from '@/components/container'
import Nav from '@/components/nav'
import PageHeader from '@/components/page-header'
import React from 'react'

export default function Guestbook() {
  return (
    <div>
      <Nav />
      <Container>
        <PageHeader title='Guestbook' description='a place to leave a message' />
        <h1 className="mt-10 text-center italic">work in progress</h1>
      </Container>
    </div>
  )
}
