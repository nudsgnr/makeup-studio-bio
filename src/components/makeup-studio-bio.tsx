'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Component } from './image-auto-slider'

import { Calendar, Instagram, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog'



export function MakeupStudioBio() {
  return (
    <div 
      className="h-[100dvh] w-full relative p-1 flex items-center justify-center overflow-hidden bg-black"
      style={{
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
              <Card className="w-full max-w-sm h-[calc(100dvh-32px)] max-h-[calc(100dvh-80px)] my-4 makeup-studio-card-small makeup-studio-card-tiny backdrop-blur-lg bg-white/95 border-0 shadow-2xl rounded-[min(6vw,24px)] animate-in slide-in-from-bottom-4 duration-700 flex flex-col overflow-hidden">
          <div className="px-3 py-1 h-full flex flex-col">
          {/* Logo Section */}
          <div className="flex justify-center flex-shrink-0 mb-3">
            <div className="relative">
              <img 
                src="logo-adunni.png"
                alt="Adunni Logo"
                className="w-24 h-24"
              />
              {/* Online Status Indicator */}
              <div className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg">
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Header Section */}
          <div className="text-center flex-shrink-0 mb-2">
                          <h1 className="text-lg font-bold text-black leading-tight mb-2 font-gloock">
                Adunni&apos;s Makeup Studio!
              </h1>
            <div className="inline-block bg-rose-100/60 px-2 py-1 rounded-full border-2 border-rose-200">
              <p className="text-rose-500/90 text-xs leading-tight font-medium">
                Professional Makeup Artist in <b></b>Lagos
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="text-center flex-shrink-0 mb-2.5">
            <p className="text-gray-500 text-sm font-medium leading-">
              Glam for every occasion. <br /> Simple Beauty, Major Impact. <br />Let&apos;s make your face the canvas!
            </p>
          </div>

          {/* Image Auto Slider */}
          <div className="flex-1 min-h-0 mb-2">
            <Component />
          </div>

          {/* Action Buttons */}
          <div className="flex-shrink-0 space-y-1 mb-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full h-9 bg-black text-white font-medium rounded-full shadow-lg text-sm"
                  size="sm"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  Book an Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100vw-16px)] max-w-sm mr-4 rounded-[min(6vw,24px)] top-auto bottom-12 translate-y-0 max-h-[calc(90vh-min(8vw,32px))]">
                <DialogHeader className="text-left">
                  <DialogTitle>Book An Appointment</DialogTitle>
                  <DialogDescription>
                    Choose how you&apos;d like to get in touch with me.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full h-[min(7vh,44px)] min-h-[40px] border-2 font-medium rounded-full text-[min(4vw,15px)] justify-start"
                    size="lg"
                    onClick={() => window.open('https://wa.me/+2348127682625', '_blank')}
                  >
                    <MessageCircle className="w-[min(5vw,18px)] h-[min(5vw,18px)] mr-2" />
                    Message on WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-[min(7vh,44px)] min-h-[40px] border-2 font-medium rounded-full text-[min(4vw,15px)] justify-start"
                    size="lg"
                    onClick={() => window.open('sms:+2348127682625', '_blank')}
                  >
                    <Phone className="w-[min(5vw,18px)] h-[min(5vw,18px)] mr-2" />
                    Send a text message
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-[min(7vh,44px)] min-h-[40px] border-2 font-medium rounded-full text-[min(4vw,15px)] justify-start"
                    size="lg"
                    onClick={() => window.open('mailto:facesbyadunni@gmail.com', '_blank')}
                  >
                    <Mail className="w-[min(5vw,18px)] h-[min(5vw,18px)] mr-2" />
                    Send an email
                  </Button>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="w-full h-[min(7vh,44px)] min-h-[40px] bg-black text-white font-medium rounded-full">
                      Cancel
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full h-9 border-2 font-medium rounded-full text-sm"
                  size="sm"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  All you need to know
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100vw-16px)] max-w-sm mr-4 rounded-[min(6vw,24px)] top-auto bottom-12 translate-y-0 max-h-[calc(90vh-min(8vw,32px))] data-[state=open]:slide-in-from-bottom-full data-[state=closed]:slide-out-to-bottom-full data-[state=open]:animate-in data-[state=closed]:animate-out">
                <DialogHeader className="text-left">
                  <DialogTitle>All You Need to Know</DialogTitle>
                  <DialogDescription>
                    Here's all you should know about my services.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-sm text-gray-600">We offer both at-home services and studio visits. Logistics fees for at-home appointments are included in your total cost, but just let us know when booking if you’d like to discuss any adjustments.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Booking Appointments</h4>
                    <p className="text-sm text-gray-600">To book an appointment, please tap the &quot;Book an Appointment&quot; button to send a message. You will be respond within 10 minutes!</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prices</h4>
                    <p className="text-sm text-gray-600">Prices for services and any add-ons will be determined together after we discuss the best look for your occassion.</p>
                  </div>
                                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="w-full h-[min(7vh,44px)] min-h-[40px] bg-black text-white font-medium rounded-full">
                        Okay
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
            </Dialog>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1 h-9 border-2 font-medium rounded-full text-sm"
                size="sm"
                onClick={() => window.open('https://www.instagram.com/facesbyadunnii?igsh=a2F0b2tscWVhcTd2', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-1" />
                Instagram
              </Button>
              
              <Button 
                variant="outline" 
                className="flex-1 h-9 border-2 font-medium rounded-full text-sm"
                size="sm"
                onClick={() => window.open('https://www.tiktok.com/@facesbyadunnii?_t=ZM-8xK4vbv6sxM&_r=1', '_blank')}
              >
                <img 
                  src="/logo-tiktok-svgrepo-com.svg" 
                  alt="TikTok" 
                  className="w-4 h-4 mr-1" 
                />
                TikTok
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-gray-100 pt-1 flex-shrink-0">
            <p className="text-xs text-gray-500 font-medium">
              Can&apos;t wait for you to sit in my chair!💗
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
} 