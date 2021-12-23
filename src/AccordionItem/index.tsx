import React, { FunctionComponent, useState, ReactNode, useEffect, useRef, CSSProperties } from 'react'
import Collapse from '../Collapse'
import styles from './accordionItem.module.scss'
import { useFirstRender } from '../utils/useFirstRender'
import clsx from 'clsx'

export type AccordionItemProps = {
  /** the header of the accordion */
  title: string | ReactNode
  /** the content that is shown when the title is clicked */
  content: string | ReactNode
  /** the subtitle of the accordion */
  preview?: string | ReactNode
  /** hide preview text of AccordionItem on it's open state */
  hidePreview?: boolean
  /** Gives the accordion an icon */
  icon?: string | ReactNode
  /** DOM element's id */
  id: string
  /** focuses the accordion item */
  focused?: number
  /** current open index identifier for the accordion */
  openIndex?: number
  /** Enable or disable auto focus of items */
  autoFocus?: boolean
  /** sets focus of item */
  setFocus?: Function
  /** sets index of item */
  setIndex?: Function
  /** Order number of item in array of items */
  index?: number
  /** class to pass to the accordion item title */
  titleClassName?: string
  /** class to pass to the accordion item wrapper */
  className?: string
  /** styles to pass to each section title wrapper */
  titleInlineStyle?: CSSProperties
  /** styles to pass to each section center wrapper */
  centerInlineStyle?: CSSProperties
  /** Option to have accordionItem already open */
  initialOpen?: boolean
  /** Function to be called when accordionItem is opened */
  onOpen?: Function
  /** Function to be called when accordionItem is closed */
  onClose?: Function
  /** Function to be called when accordionItem is focused */
  onFocus?: Function
  /** Will hide collapse-content at accordion item level if horizontal */
  horizontal?: boolean
  /** styles to pass to each item div wrapper */
  accordionItemStyle?: CSSProperties
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  title = '',
  content = '',
  icon,
  preview,
  id = '',
  index,
  focused,
  className,
  titleClassName,
  openIndex,
  autoFocus,
  setFocus = () => {},
  setIndex = () => {},
  hidePreview = false,
  titleInlineStyle = {},
  centerInlineStyle = {},
  initialOpen = false,
  onOpen = () => {},
  onClose = () => {},
  onFocus = () => {},
  horizontal = false,
  accordionItemStyle = {}
}) => {
  const labelId = `label-${id}`
  const sectionId = `section-${id}`
  const [open, setOpen] = useState(initialOpen)

  const labelRef = useRef<HTMLDivElement>(null)
  const firstRender = useFirstRender()

  useEffect(() => {
    if (!firstRender && index === focused) {
      if (labelRef && labelRef.current) {
        autoFocus && labelRef.current.focus()
        onFocus()
      }
    }
  }, [index, focused])

  useEffect(() => {
    if (open && index !== openIndex) {
      setOpen(false)
    }
  }, [index, openIndex])

  const handleClick = () => {
    if (open) {
      onClose()
    } else {
      onOpen()
    }
    setOpen(!open)
  }

  const withPreviewStyle = preview ? styles['withPreview'] : ''
  const hidePreviewStyle = hidePreview ? styles['hidePreview'] : ''

  const lineStyles = clsx(styles['line'], withPreviewStyle, hidePreviewStyle)
  const centerStyles = clsx(styles['center'], withPreviewStyle, hidePreviewStyle)
  const previewStyles = clsx(styles['preview'], hidePreviewStyle)
  // const innerConentStyles = clsx(styles['content'], icon && styles['alignedContent'])

  const handleKeys = (e: any) => {
    switch (e.key) {
      case ' ':
      case 'Enter':
        handleClick()
        break
      case 'ArrowDown':
        setIndex('next')
        break
      case 'ArrowUp':
        setIndex('prev')
        break
      case 'Home':
        setIndex('start')
        break
      case 'End':
        setIndex('end')
        break
      default:
    }
  }

  return (
    <div
      className={clsx(styles['accordionItem'], open && styles['open'], horizontal && styles['horizontal'], className)}
      style={accordionItemStyle}
    >
      <div
        className={lineStyles}
        aria-expanded={open}
        aria-controls={sectionId}
        tabIndex={0}
        id={labelId}
        style={titleInlineStyle}
        role="button"
        ref={labelRef}
        onClick={handleClick}
        onKeyDown={handleKeys}
        onFocus={() => {
          setFocus(index)
        }}
        onBlur={() => {
          setFocus(-1)
        }}
        data-testid="accordion-title"
      >
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={centerStyles} style={centerInlineStyle}>
          <div className={clsx(styles['title'], titleClassName)}>{title}</div>
          {preview && <span className={previewStyles}>{preview} </span>}
        </div>
        <span className={styles.openIcon} />
      </div>
      {horizontal ? null : (
        <Collapse
          isOpen={open}
          childProps={{
            role: 'region',
            'aria-labelledby': labelId,
            'aria-hidden': open ? 'false' : 'true',
            'data-testid': 'accordion-content'
          }}
        >
          <div id={sectionId} className={styles.innerContent}>
            {content}
          </div>
        </Collapse>
      )}
    </div>
  )
}

export default AccordionItem
