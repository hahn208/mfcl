import React, { FunctionComponent } from 'react'
import clsx from 'clsx'

import styles from './tooltip.module.scss'

export interface Props {
  arrowClassName?: string
  delay?: number
  dimensions?: ClientRect
  duration?: number
  easing?: string
  isShowing?: boolean
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'right' | 'left'
}

const Arrow: FunctionComponent<Props> = ({
  arrowClassName,
  delay,
  dimensions,
  duration,
  easing,
  isShowing,
  position
}) => {
  const getBaseStyle = () => {
    if (dimensions && dimensions.top) {
      const { top, bottom, left, right } = dimensions
      return {
        transition: `all ${duration}ms ${easing} ${delay}ms`,
        opacity: isShowing ? 1 : 0,
        pointerEvents: isShowing ? 'auto' : 'none',
        top,
        bottom,
        left,
        right
      }
    }
    return {
      transition: `all ${duration}ms ${easing} ${delay}ms`,
      opacity: isShowing ? 1 : 0,
      pointerEvents: isShowing ? 'auto' : 'none'
    }
  }

  const getPositionStyle = () => {
    if (dimensions && dimensions.top) {
      const { top, left, height, width } = dimensions
      switch (position) {
        case 'top':
        case 'top-left':
        case 'top-right':
          return {
            bottom: '100%',
            borderLeft: 'solid 1px',
            borderBottom: 'solid 1px',
            top: top + window.scrollY - 19,
            left: left - 5 + width / 2
          }

        case 'bottom':
        case 'bottom-left':
        case 'bottom-right':
          return {
            borderRight: 'solid 1px',
            borderTop: 'solid 1px',
            bottom: 'auto',
            top: top + window.scrollY + height - 1,
            left: left - 5 + width / 2
          }

        case 'left':
          return {
            left: left - 21,
            top: top + window.scrollY + 9,
            borderRight: 'solid 1px',
            borderBottom: 'solid 1px',
            bottom: 'auto',
            right: '102%'
          }

        case 'right':
          return {
            left: left + width + 8,
            top: top + window.scrollY + 11,
            borderTop: 'solid 1px',
            borderLeft: 'solid 1px',
            bottom: 'auto'
          }

        default:
          return {}
      }
    }
    return {}
  }

  const getSpecificStyle = () => {
    if (dimensions && dimensions.top) {
      const { left, width } = dimensions
      switch (position) {
        case 'bottom-left':
          return {
            left: left - 20 + width / 2
          }
        case 'top-left':
          return {
            left: left - 20 + width / 2
          }
        default:
          return {}
      }
    }
    return {}
  }

  const getAnimation = () => {
    let animation: 'active' | 'enter' = 'active'
    if (isShowing === false) {
      animation = 'enter'
    }

    return {
      transform: `rotate(-45deg) ${getAnimationStyleByPosition()[animation]}`
    }
  }

  const getAnimationStyleByPosition = () => {
    switch (position) {
      case 'top':
      case 'top-right':
      case 'top-left':
        return {
          enter: 'translate3d(-50%, 0, 0)',
          active: 'translate3d(-50%, -2px, 0)'
        }

      case 'bottom':
        return {
          enter: 'translate3d(0, -10px, 0)',
          active: 'translate3d(-50%, 1px, 0)'
        }
      case 'bottom-left':
      case 'bottom-right':
        return {
          enter: 'translate3d(0, -10px, 0)',
          active: 'translate3d(-50%, 0, 0)'
        }

      case 'left':
        return {
          enter: 'translate3d(0, -50%, 0)',
          active: 'translate3d(0, -50%, 0)'
        }

      case 'right':
        return {
          enter: 'translate3d(-10px, -100%, 0)',
          active: 'translate3d(0, -50%, 0)'
        }

      default:
        return { enter: '', active: '' }
    }
  }

  return (
    <div
      data-testid="arrow"
      className={clsx(styles['tooltip-arrow'], arrowClassName)}
      // @ts-ignore
      style={{
        ...getBaseStyle(),
        ...getPositionStyle(),
        ...getSpecificStyle(),
        ...getAnimation()
      }}
    />
  )
}

export default Arrow