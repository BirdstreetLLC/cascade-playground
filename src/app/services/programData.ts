import { channel } from "node:diagnostics_channel"

enum Status {
    Published = 'Published',
    Draft = 'Draft',
    Archived = 'Archived'
}

enum Channel {
    Online = 'Online',
    InPerson = 'In Person',
    LiveCall = 'Live Call',
    SMS = 'SMS'
}

export const programData = [
    {
      status: Status.Published,
      channel: Channel.LiveCall,
      trackedOutcome: "Voluntary Disenrollment within 3 months following outreach",
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
      didNotEngage: 1.2,
      unableToReach: 2.83,
      optedOut: 1.68,
    },
    {
      status: Status.Published,
      channel: Channel.InPerson,
      trackedOutcome: "Voluntary Disenrollment within 3 months following outreach",
      title: 'Establishing Care with a Primary Care Physician',
      startDate: '01/12/2024',
      endDate: '03/12/2025',
      dataAsOf: '01/12/2024',
      engagementRate: 57.84,
      engagementRateTitle: 'Engagement Rate',
      engagementRateSubtitle: 'Your program is ahead of benchmarks!',
      memberList: 127703,
      engaged: 57.84,
      didNotEngage: 1.2,
      unableToReach: 2.83,
      optedOut: 3.68,
    }, 
    {
      status: Status.Published,
      channel: Channel.Online,
      trackedOutcome: "Voluntary Disenrollment within 3 months following outreach",
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
      didNotEngage: 1.2,
      unableToReach: 2.83,
      optedOut: 3.71,
    }
]