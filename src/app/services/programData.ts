import { channel } from "node:diagnostics_channel"

enum Status {
    Published = 'Published',
    Draft = 'Draft',
    Archived = 'Archived'
}

enum Channel {
    Online = 'Online',
    InPerson = 'In Person',
    LiveCall = 'Live Call'
}

export const programData = [
    {
      status: Status.Published,
      channel: Channel.LiveCall,
      title: 'Health Outcomes Survey',
      description: "Target high risk members likely to leave the plan to minimize disenrollment", 
      startDate: '01/12/2024',
      endDate: '03/12/2025',
      dataAsOf: '01/12/2024',
      engagementRate: 50.77,
      engagementRateTitle: 'Engagement Rate',
      engagementRateSubtitle: 'Your program is ahead of benchmarks!',
      memberList: 127703,
      engaged: 50.77,
      unableToReach: 2.83,
      optOut: 1.68,
    },
    {
      status: Status.Published,
      channel: Channel.InPerson,
      title: 'Establishing Care with a Primary Care Physician',
      description: "Target high risk members likely to leave the plan to minimize disenrollment", 
      startDate: '01/12/2024',
      endDate: '03/12/2025',
      dataAsOf: '01/12/2024',
      engagementRate: 57.84,
      engagementRateTitle: 'Engagement Rate',
      engagementRateSubtitle: 'Your program is ahead of benchmarks!',
      memberList: 127703,
      engaged: 57.84,
      unableToReach: 2.83,
      optOut: 3.68,
    }, 
    {
      status: Status.Published,
      channel: Channel.Online,
      title: 'Breast Cancer Screening',
      description: "Target high risk members likely to leave the plan to minimize disenrollment", 
      startDate: '01/12/2024',
      endDate: '03/12/2025',
      dataAsOf: '01/12/2024',
      engagementRate: 35.77,
      engagementRateTitle: 'Engagement Rate',
      engagementRateSubtitle: 'Your program is ahead of benchmarks!',
      memberList: 24206,
      engaged: 42.33,
      unableToReach: 2.83,
      optOut: 3.71,
    }
]