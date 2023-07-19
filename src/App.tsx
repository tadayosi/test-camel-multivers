import { Card, CardBody, CardTitle, Page, PageSection } from '@patternfly/react-core'
import { FC } from 'react'

export const App: FC = () => {
  return (
    <Page>
      <PageSection>
        <Card>
          <CardTitle>Test App</CardTitle>
          <CardBody>Hello!</CardBody>
        </Card>
      </PageSection>
    </Page>
  )
}
