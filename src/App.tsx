import * as camel3 from '@hawtio/camel-model-v3'
import * as camel4 from '@hawtio/camel-model-v4'
import {
  Card,
  CardBody,
  CardTitle,
  Page,
  PageSection,
  TextContent,
  TextList,
  TextListItem,
} from '@patternfly/react-core'
import { FC } from 'react'

export const App: FC = () => {
  console.log('Camel model versions:', camel3.apacheCamelModelVersion, camel4.apacheCamelModelVersion)
  return (
    <Page>
      <PageSection>
        <Card isFullHeight>
          <CardTitle>Test App</CardTitle>
          <CardBody>
            <TextContent>
              <TextList component='dl'>
                <TextListItem component='dt'>Camel v3</TextListItem>
                <TextListItem component='dd'>{camel3.apacheCamelModelVersion}</TextListItem>
                <TextListItem component='dt'>Camel v4</TextListItem>
                <TextListItem component='dd'>{camel4.apacheCamelModelVersion}</TextListItem>
              </TextList>
            </TextContent>
          </CardBody>
        </Card>
      </PageSection>
    </Page>
  )
}
