// components/TopPerformingContent.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PlayCircle } from 'lucide-react'

interface VideoStats {
  id: number
  views: number
}

export function TopPerformingContent() {
  const [videos, setVideos] = useState<VideoStats[]>([])

  useEffect(() => {
    // Generate random views only on client side
    setVideos([1, 2, 3].map(id => ({
      id,
      views: Math.floor(Math.random() * 100000)
    })))
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {videos.map((video) => (
            <div key={video.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <PlayCircle className="h-8 w-8 text-gray-400" />
              </div>
              <div>
                <p className="font-medium">Video Title #{video.id}</p>
                <p className="text-sm text-gray-500">
                  Views: {video.views.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}