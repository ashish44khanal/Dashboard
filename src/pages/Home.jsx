import React from 'react'
import AddMT from '../components/ManagementTeam/AddMT'
import ViewMT from '../components/ManagementTeam/ViewMT'
import DashCard from '../templates/DashCard'
import Page from '../templates/Page'

function Home() {
    return (
      <Page>
           <DashCard 
                btnAdd="Add Mgmt Team" 
                btnView="View Mgmt Team" 
                AddComponent={<AddMT />} 
                ViewComponents={<ViewMT />}>
            </DashCard>
      </Page>
    )
}

export default Home
