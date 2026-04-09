import PreworkSpec from './curriculum/Prework/prework_spec';
import CurriculumOverview from './curriculum/Curriculum/CurriculumOverview';

import Week1Unit from './curriculum/Week 1/week1_unit';
import Week1S1 from './curriculum/Week 1/week1_session1_slides';
import Week1S2 from './curriculum/Week 1/week1_session2_slides';

import Week2Unit from './curriculum/Week 2/week2_unit';
import Week2S1 from './curriculum/Week 2/week2_session1_slides';
import Week2S2 from './curriculum/Week 2/week2_session2_slides';

import Week3Unit from './curriculum/Week 3/week3_unit';
import Week3S1 from './curriculum/Week 3/week3_session1_slides';
import Week3S2 from './curriculum/Week 3/week3_session2_slides';

import Week4Unit from './curriculum/Week 4/week4_unit';
import Week4S1 from './curriculum/Week 4/week4_session1_slides';
import Week4S2 from './curriculum/Week 4/week4_session2_slides';

import Week5Unit from './curriculum/Week 5/week5_unit_v2';
import Week5S1 from './curriculum/Week 5/week5_session1_slides';
import Week5S2 from './curriculum/Week 5/week5_session2_slides';
import GitForTeams from './curriculum/Week 5/git_for_teams_slides';

import Week6Unit from './curriculum/Week 6/week6_unit';
import Week6S1 from './curriculum/Week 6/week6_session1_slides';
import Week6S2 from './curriculum/Week 6/week6_session2_slides';

import Week7Unit from './curriculum/Week 7/week7_unit';
import Week7S1 from './curriculum/Week 7/week7_session1_slides';
import Week7S2 from './curriculum/Week 7/week7_session2_slides';

import Week8Unit from './curriculum/Week 8/week8_unit';
import Week8S1 from './curriculum/Week 8/week8_session1_slides';
import Week8S2 from './curriculum/Week 8/week8_session2_slides';

import Week9Unit from './curriculum/Week 9/week9_unit';
import Week9S1 from './curriculum/Week 9/week9_session1_slides';
import Week9S2 from './curriculum/Week 9/week9_session2_slides';

import Week10Unit from './curriculum/Week 10/week10_unit';
import Week10S1 from './curriculum/Week 10/week10_session1_slides';
import Week10S2 from './curriculum/Week 10/week10_session2_slides';

export const navigationRegistry: Record<string, Record<string, React.ElementType>> = {
  "Prework": {
    "Spec": PreworkSpec
  },
  "Curriculum": {
    "Overview": CurriculumOverview
  },
  "Week 1": {
    "Unit": Week1Unit,
    "Session 1": Week1S1,
    "Session 2": Week1S2
  },
  "Week 2": {
    "Unit": Week2Unit,
    "Session 1": Week2S1,
    "Session 2": Week2S2
  },
  "Week 3": {
    "Unit": Week3Unit,
    "Session 1": Week3S1,
    "Session 2": Week3S2
  },
  "Week 4": {
    "Unit": Week4Unit,
    "Session 1": Week4S1,
    "Session 2": Week4S2
  },
  "Week 5": {
    "Unit": Week5Unit,
    "Session 1": Week5S1,
    "Session 2": Week5S2,
    "Git For Teams": GitForTeams
  },
  "Week 6": {
    "Unit": Week6Unit,
    "Session 1": Week6S1,
    "Session 2": Week6S2
  },
  "Week 7": {
    "Unit": Week7Unit,
    "Session 1": Week7S1,
    "Session 2": Week7S2
  },
  "Week 8": {
    "Unit": Week8Unit,
    "Session 1": Week8S1,
    "Session 2": Week8S2
  },
  "Week 9": {
    "Unit": Week9Unit,
    "Session 1": Week9S1,
    "Session 2": Week9S2
  },
  "Week 10": {
    "Unit": Week10Unit,
    "Session 1": Week10S1,
    "Session 2": Week10S2
  }
};
