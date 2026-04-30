import { OrganizationList } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
        <OrganizationList
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
        />
    </div>
  )
}

export default page