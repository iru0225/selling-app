import CrossIcon from '../icons/cross-icon'
import { Button, Container, ContentWrapper, Overlay } from './styled'

interface ModalProps {
  children: React.ReactNode
  submit?: boolean
  cancel?: boolean
  onClick?: (type: string) => void
  onCloseModal: () => void
}

const Modal = ({
  children,
  submit,
  cancel,
  onClick,
  onCloseModal
}: ModalProps) => {
  return(
    <Overlay>
      <Container>
        <ContentWrapper>
          <Button onClick={onCloseModal}>
            <CrossIcon />
          </Button>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </ContentWrapper>
      </Container>
    </Overlay>
  )
}

export default Modal