// ** React Imports
import { MutableRefObject } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Direction } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import KeenSliderWrapper from './KeenSliderWrapper'
// ** Third Party Components
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react'

const ThumbnailPlugin = (mainRef) => {
  return slider => {
    function removeActive() {
      slider.slides.forEach(slide => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add('active')
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', main => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
      })
    })
  }
}

const SwiperThumbnails = ({ direction='rtl',sliderItem }) => {
  console.log('sliderItem',sliderItem)
  // ** Hooks
  const theme = useTheme()
  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: direction === 'rtl',
    loop:true
  })
  const [thumbnailRef] = useKeenSlider(
    {
      rtl: direction === 'rtl',
      slides: {
        perView: 4,
        spacing: 16
      },
      breakpoints: {
        [`(max-width: ${theme.breakpoints.values.sm}px)`]: {
          slides: {
            perView: 3,
            spacing: 8
          }
        }
      }
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
    <KeenSliderWrapper>  
      
      <Box ref={sliderRef} className='keen-slider'>
  {sliderItem.map((item, index) => (
    <Box key={index} sx={{ display: 'flex' }} className='keen-slider__slide'>
      <img src={item.images} alt={item.alt} />
    </Box>
  ))}
</Box>


      <Box sx={{ mt: 4 }} ref={thumbnailRef} className='keen-slider thumbnail'>
       
        {sliderItem.map((item, index) => (
    <Box key={index} className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
      <img src={item.images} alt={item.alt} />
    </Box>
  ))}
      </Box>
      </KeenSliderWrapper>
    </>
  )
}

export default SwiperThumbnails
