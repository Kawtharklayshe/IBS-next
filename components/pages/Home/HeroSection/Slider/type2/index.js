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

const SwiperThumbnails = ({ direction='rtl' }) => {
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
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_948ddfe1-af95-493a-b5e6-4735720bb5e6637963279476172709.jpg' alt='swiper 1' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_2c065470-3692-4a36-8d45-38bfb9022ea1637995548705326495.jpg' alt='swiper 2' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_fa8a07b9-14bb-4983-9c07-1da89d6ff656637995548506805539.jpg' alt='swiper 3' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_7a2fcae0-a229-4f51-b0e3-d5ca146d0e53637995548301819628.jpg' alt='swiper 4' />
        </Box>
        <Box sx={{ display: 'flex' }} className='keen-slider__slide'>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_948ddfe1-af95-493a-b5e6-4735720bb5e6637963279476172709.jpg' alt='swiper 5' />
        </Box>
      </Box>

      <Box sx={{ mt: 4 }} ref={thumbnailRef} className='keen-slider thumbnail'>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_948ddfe1-af95-493a-b5e6-4735720bb5e6637963279476172709.jpg' alt='swiper 1' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_2c065470-3692-4a36-8d45-38bfb9022ea1637995548705326495.jpg' alt='swiper 2' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_fa8a07b9-14bb-4983-9c07-1da89d6ff656637995548506805539.jpg' alt='swiper 3' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_7a2fcae0-a229-4f51-b0e3-d5ca146d0e53637995548301819628.jpg' alt='swiper 4' />
        </Box>
        <Box className='keen-slider__slide' sx={{ display: 'flex', cursor: 'pointer' }}>
          <img src='https://foliocontent.meta-itech.com/Content/Uploads//coastal//File_948ddfe1-af95-493a-b5e6-4735720bb5e6637963279476172709.jpg' alt='swiper 5' />
        </Box>
      </Box>
      </KeenSliderWrapper>
    </>
  )
}

export default SwiperThumbnails
