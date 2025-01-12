import React, { FunctionComponent, ReactNode, memo, KeyboardEvent } from 'react'
import clsx from 'clsx'

import styles from './stepper.module.scss'

export interface IStep {
  className?: string
  color?: string
  icon?: ReactNode
  label?: string | ReactNode
}

interface Props {
  /**
   * Controls the current active step
   */
  activeStep: boolean
  currentOrPassed: boolean
  index: number
  step: IStep
  color?: string
  /**
   * Use this function to save the selected index
   */
  selectIndex?: Function
  handleKeyDown: (e: KeyboardEvent<HTMLDivElement>, index: number) => void
  theNextActive?: boolean
  vertical?: boolean
}

const Step: FunctionComponent<Props> = ({
  activeStep,
  currentOrPassed,
  handleKeyDown,
  step,
  index,
  selectIndex,
  theNextActive,
  vertical
}) => {
  const { color = '#d63426', icon, label, className } = step
  const verticalClass = vertical && styles.vertical
  const currentOrPassedClass = currentOrPassed ? styles.passed : styles['not-passed']
  const activeStepClass = theNextActive && styles['next-active']

  return (
    <li className={clsx(styles['progress-step'], verticalClass, currentOrPassedClass, activeStepClass, className)}>
      <div
        onClick={selectIndex ? () => selectIndex(index) : undefined}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => handleKeyDown(e, index)}
        role="button"
        aria-label={"step-"+index}
        tabIndex={selectIndex ? 0 : -1}
        className={clsx(styles.circle, verticalClass)}
        itemID={"step-" + index}
        style={
          activeStep
            ? { border: `2px solid ${color}` }
            : { border: `2px solid ${color}`, cursor: selectIndex ? 'pointer' : '' }
        }
      >
        {icon}
      </div>
      {label && <div className={clsx(styles.label, verticalClass)}>{label}</div>}
    </li>
  )
}

export default memo(Step)
