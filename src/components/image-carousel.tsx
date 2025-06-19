'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import type { EmblaCarouselType } from 'embla-carousel'

interface ImageCarouselProps {
  images: string[]
  className?: string
}

export function ImageCarousel({ images, className = '' }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <div className={`relative flex flex-col ${className}`}>
      <div className="overflow-hidden rounded-xl flex-1 min-h-0" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Makeup look ${index + 1}`}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-[min(4vw,16px)] top-1/2 -translate-y-1/2 h-[min(10vw,40px)] w-[min(10vw,40px)] min-h-[32px] min-w-[32px] rounded-full bg-white/90 hover:bg-white shadow-lg z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-[min(4vw,16px)] w-[min(4vw,16px)] min-h-[12px] min-w-[12px]" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-[min(4vw,16px)] top-1/2 -translate-y-1/2 h-[min(10vw,40px)] w-[min(10vw,40px)] min-h-[32px] min-w-[32px] rounded-full bg-white/90 hover:bg-white shadow-lg z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-[min(4vw,16px)] w-[min(4vw,16px)] min-h-[12px] min-w-[12px]" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-[min(1.5vh,8px)] flex-shrink-0">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-[min(2vw,8px)] w-[min(2vw,8px)] min-h-[6px] min-w-[6px] rounded-full transition-all ${
              index === selectedIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-blue-600'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
} 