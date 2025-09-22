export enum TooltipDefinitions {
  MemberList = 'Member List',
  Engaged = 'Engaged',
  UnableToReach = 'Unable to Reach',
  OptOutRate = 'Opt Out Rate',
  EngagementRate = 'Engagement Rate',
  EngagementOutcomeRate = 'Engagement Outcome Rate',
  unengagementOutcomeRate = 'Unengagement Outcome Rate',
  DidNotEngage = 'Did Not Engage',
}

export const tooltipDefinitions = [
  {
    key: TooltipDefinitions.MemberList,
    value: 'Total number of members assigned to this program',
  },
  {
    key: TooltipDefinitions.Engaged,
    value: 'Total number of members who engaged with this program',
  },
  {
    key: TooltipDefinitions.UnableToReach,
    value: 'Total number of members who did not engage with this program',
  },
  {
    key: TooltipDefinitions.OptOutRate,
    value: 'Total number of members who purposefully opted out of the program',
  },
  {
    key: TooltipDefinitions.EngagementRate,
    value: 'Total percentage of members who engaged with this program',
  },
  {
    key: TooltipDefinitions.DidNotEngage,
    value: 'Total number of members who did not engage with this program',
  },
  {
    key: TooltipDefinitions.EngagementOutcomeRate,
    value: 'Total percentage of members who engaged with this program',
  },
  {
    key: TooltipDefinitions.unengagementOutcomeRate,
    value: 'Total percentage of members who did not engage with this program',
  },
];
