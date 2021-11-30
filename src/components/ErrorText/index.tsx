import { FieldMetaState } from 'react-final-form'

import { AlertText } from './index.style'

interface Props extends Pick<FieldMetaState<any>, 'error' | 'dirty'> {}

const ErrorText: React.FC<Props> = ({ error, dirty }) => {
  return !!error && dirty && <AlertText>{error}</AlertText>
}

export default ErrorText
