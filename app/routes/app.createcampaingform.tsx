import { ActionFunction } from '@remix-run/node'
import { Form, useActionData, useSubmit } from '@remix-run/react'
import { Button, Frame, Layout, Modal, Page, TextField } from '@shopify/polaris'
import { useCallback, useState } from 'react'

type Props = {}

type CreateCampaingFormProps = {
    activate: boolean;
    setActivate: React.Dispatch<React.SetStateAction<boolean>>;
  };


export const action: ActionFunction = async ({ request }) => {

}

const CreateCampaingForm:React.FC<CreateCampaingFormProps> = ({ activate, setActivate }) => {
    
    const handleChange = useCallback(() => setActivate(!activate), [activate, setActivate])
    const activator = <Button onClick={handleChange}>Create new</Button>

    const [value, setValue] = useState('default')
    const handleChangeText = useCallback((newValue: string) => setValue(newValue), [])

    const submit = useSubmit()
    const actionData = useActionData<typeof action>()
    console.log(actionData, 'CreateCampaingForm')

    const sendEmails = () => submit({}, { replace: true, method: 'POST' })

    return (
        <Page>
            <Frame>
                <Modal
                    activator={activator}
                    open={activate}
                    onClose={handleChange}
                    title="Create a new email campaigns"
                    primaryAction={{
                        content: 'Send',
                        onAction: sendEmails
                    }}
                    secondaryActions={[{
                        content: 'Finish Later',
                        onAction: () => { }
                    }]}
                >
                    <Modal.Section>
                        <Form>
                            <Layout>
                                <Layout.Section>
                                    <TextField
                                        label="Campaing Name"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete="off"
                                    />
                                    <TextField
                                        label="To"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete="off"
                                    />
                                    <TextField
                                        label="Corporation"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete="off"
                                    />
                                    <TextField
                                        label="From"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete="off"
                                    />
                                    <TextField
                                        label="Email Subject"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete="off"
                                    />
                                    <TextField
                                        label="Content"
                                        value={value}
                                        onChange={handleChangeText}
                                        autoComplete="off"
                                    />
                                    <Button submit >send</Button>
                                </Layout.Section>
                            </Layout>
                        </Form>
                    </Modal.Section>
                </Modal>

            </Frame>
        </Page>
    )
}

export default CreateCampaingForm