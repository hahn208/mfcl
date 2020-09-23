import React, { FunctionComponent } from 'react'

import carouselHelper from './carouselHelper'
import clsx from 'clsx'
import styles from './carousel.module.scss'

interface Props {
  /** Aria label to set apart different carousels in the page.  
   * Label is prefixed with 'carousel-'
   */
  ariaLabel: string
  /** Sets the class for the Carousel wrapper */
  carouselClass?: string
  /** Sets how many slides to show */
  itemsToShow?: number
  /** Sets the transition control button alignments. Two non conflicting configurations can be combined.  
   * Valid configurations are: 'top', 'middle', 'center', 'apart', 'left', 'right', 'bottom'.  
   * 'middle' centers vertically while 'center' centers horizontally. */
  controlAlignment?: string 
  /** Hides control buttons unless hovered */
  hideControls?: boolean
  /** Sets the indicator buttons' style */
  indicatorStyle?: 'bar' | 'round'
  /** Hides indicator buttons */
  hideIndicators?: boolean
  /** Supply a px margin between slides */
  layoutGap?: number
  /** Allows Carousel to be cyclical. */
  infinite?: boolean
  /** Enables automatic transitions. */
  autoSlide?: boolean
  /** Time in milliseconds for autoSlide */
  duration?: number
  /** Override props at certain breakpoints  
  

  responsive prop properties:   


    breakpoint: number,  
    itemsToShow: number,   
    controlAlignment: string,    
    hideIndicators: boolean,   
    hideControls: boolean,  
    indicatorStyle: string,   
    layoutGap: number   
  
  */
  responsive?: object[]
  [rest: string]: unknown // ...rest property
}

const Carousel: FunctionComponent<Props> = ({
  carouselClass,
  ariaLabel,
  itemsToShow = 1,
  controlAlignment = 'middle apart',
  hideIndicators = false,
  hideControls = false,
  indicatorStyle = 'round',
  layoutGap = 0,
  infinite = false,
  autoSlide = false,
  duration = 3000,
  responsive = [{}],
  children
}) => {

  const {
    slidesRef,
    slidesLeft,
    slides,
    slidesWidth,
    indicators,
    controlsVisibility,
    indicatorVisibility,
    indicatorRef,
    alignment,
    slidesTransition,
    ariaLive,
    handleDragStart,
    handleDragEndHandler,
    handleDragActionHandler,
    handleIndexCheck,
    shiftSlide
  } = carouselHelper(
    children,
    itemsToShow,
    controlAlignment,
    hideControls,
    hideIndicators,
    indicatorStyle,
    duration,
    infinite,
    autoSlide,
    layoutGap,
    //@ts-ignore
    responsive
  )

  const buttons = (
    <>
      <button
        aria-hidden={(controlsVisibility && 'true') || 'false'}
        className={clsx(
          styles['carousel-wrapper-control'],
          styles['prev'],
          controlsVisibility && styles['hidden'],
          alignment
        )}
        onClick={() => shiftSlide(-1)}
        onKeyDown={(event) => {if(event.key === "Enter") {shiftSlide(-1);}}}
      >
        <p className={clsx(styles['sr-only'])}>Move Slider Left Button.</p>
      </button>
      <button
        aria-hidden={(controlsVisibility && 'true') || 'false'}
        className={clsx(
          styles['carousel-wrapper-control'],
          styles['next'],
          controlsVisibility && styles['hidden'],
          alignment
        )}
        onClick={() => shiftSlide(1)}
        onKeyDown={(event) => {if(event.key === "Enter") {shiftSlide(1);}}}
      >
        <p className={clsx(styles['sr-only'])}>Move Slider Right Button.</p>
      </button>
    </>
  )

  const screenReaderInstructions = (
    <p className={clsx(styles['sr-only'])}>
      This is a draggable carousel
      {autoSlide && 'It has auto-rotating slides'}
      Use Next and Previous buttons to navigate.
      {!indicatorVisibility && 'You can also jump to a slide using the slide dots.'}
    </p>
  )

  const indicatorWrapper = (
    <div ref={indicatorRef} className={clsx(styles['carousel-wrapper-indicators'])}>
      {!indicatorVisibility && indicators}
    </div>
  )

  const template = (
    <section
      className={clsx(styles['carousel-wrapper'], styles['loaded'], carouselClass)}
      aria-label={'carousel-' + ariaLabel}
    >
      {screenReaderInstructions}
      <div className={styles['carousel-wrapper-slider']}>
        <div
          className={styles['carousel-wrapper-slides']}
          aria-live={ariaLive}
          style={{
            left: `${slidesLeft}%`,
            width: `${slidesWidth}%`,
            transition: slidesTransition,
            WebkitTransition: slidesTransition,
            MozTransition: slidesTransition,
            msTransition: slidesTransition,
            OTransition: slidesTransition
          }}
          ref={slidesRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEndHandler}
          onTouchMove={handleDragActionHandler}
          onTouchCancel={handleIndexCheck}
          onTransitionEnd={handleIndexCheck}
        >
          {slides}
        </div>
        {indicatorWrapper}
      </div>
      {buttons}
    </section>
  )

  return template
}

export default Carousel
