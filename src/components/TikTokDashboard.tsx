// components/TikTokDashboard.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Users, PlayCircle, ThumbsUp, MessageCircle, TrendingUp, Activity } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  icon: React.ElementType
  trend: number
}

const performanceData = [
  { date: 'Jan 1', views: 15000, likes: 2500, followers: 800, comments: 300 },
  { date: 'Jan 2', views: 18000, likes: 3000, followers: 850, comments: 420 },
  { date: 'Jan 3', views: 16500, likes: 2800, followers: 900, comments: 350 },
  { date: 'Jan 4', views: 21000, likes: 3500, followers: 1000, comments: 480 },
  { date: 'Jan 5', views: 19500, likes: 3200, followers: 950, comments: 400 },
]

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p className={`text-sm mt-2 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% vs last period
          </p>
        </div>
        <Icon className="h-8 w-8 text-gray-400" />
      </div>
    </CardContent>
  </Card>
)

export default function TikTokDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">TikTok Analytics Dashboard</h1>
        {/* <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Followers" value="45.2K" icon={Users} trend={12.5} />
        <StatCard title="Total Views" value="1.2M" icon={PlayCircle} trend={8.3} />
        <StatCard title="Total Likes" value="89.3K" icon={ThumbsUp} trend={-2.1} />
        <StatCard title="Comments" value="12.5K" icon={MessageCircle} trend={15.8} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#8884d8" name="Views" />
                  <Line type="monotone" dataKey="likes" stroke="#82ca9d" name="Likes" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="followers" stroke="#ffc658" name="Followers" />
                  <Line type="monotone" dataKey="comments" stroke="#ff7300" name="Comments" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    

        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Age 13-17</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <span>25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Age 18-24</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span>45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Age 25-34</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <span>30%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { icon: ThumbsUp, text: 'New milestone: 1M likes reached!' },
                { icon: Users, text: '500 new followers today' },
                { icon: TrendingUp, text: 'Video #2489 is trending' },
                { icon: Activity, text: 'Engagement rate up 12%' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-2">
                  <item.icon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}