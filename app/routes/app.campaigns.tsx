import { InlineGrid, Layout, LegacyCard, Page, Tabs, Text } from '@shopify/polaris'
import { useCallback, useState } from 'react'
import { tabs } from '~/utils/tabs'
import CreateCampaingForm from './app.createcampaingform'

type Props = {}

function CampaignsPage({ }: Props) {

    const [selected, setSelected] = useState(0)

    const handleTabChange = useCallback((selectedTabIndex: number) => setSelected(selectedTabIndex), [])
    const [activate, setActivate] = useState(false)

    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <InlineGrid columns={2} >
                        <Text variant="heading3xl" as="h2">Campaings</Text>

                    </InlineGrid>
                </Layout.Section>
                <br />
                <Layout.Section>
                    <LegacyCard>
                        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                            <LegacyCard.Section title={tabs[selected].content}>
                                {tabs[selected].component}
                            </LegacyCard.Section>
                        </Tabs>
                    </LegacyCard>
                </Layout.Section>
                <Layout.Section>
                    <CreateCampaingForm activate={activate} setActivate={setActivate} />
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default CampaignsPage