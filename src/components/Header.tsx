import React from 'react'
import { useIntl } from 'react-intl';

export default function Header() {
      const {formatMessage}=useIntl();
  return (
    <div>
          <span>{formatMessage({ id: "bonjour" })}</span>
    </div>
  )
}
