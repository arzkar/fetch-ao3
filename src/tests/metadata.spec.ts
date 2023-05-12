import 'mocha';
import { assert } from 'chai';

import { ArchiveOfOurOwn } from '../index';

describe('ArchiveOfOurOwn: fetchWorksMetadata', () => {
  it('Calls fetchWorksMetadata()', () => {
    let fic = new ArchiveOfOurOwn();
    const worksUrl: string = "https://archiveofourown.org/works/15828654/chapters/36853599"
    const params: Object = {
        "view_adult": 'true',
        'view_full_work': 'true'
    }
    const expectedResponse = {
        worksUrl: 'https://archiveofourown.org/works/15828654/chapters/36853599',
        worksId: '15828654',
        worksName: 'Harry Potter and the Prince of Slytherin',
        authorName: 'TheSinister_Man',
        authorUrl: 'https://archiveofourown.org/users/TheSinister_Man/pseuds/TheSinister_Man',
        worksWarnings: 'Major Character Death',
        worksCategory: 'Gen',
        worksFandom: 'Harry Potter - J. K. Rowling',
        worksRelationships: 'James Potter/Lily Evans Potter',
        worksCharacters: 'Harry Potter,Hermione Granger,James Potter,Lily Evans Potter,Quirinus Quirrell,Voldemort (Harry Potter),Albus Dumbledore,Ron Weasley,Blaise Zabini,Theodore Nott,Draco Malfoy,Original Characters,Marcus Flint,Peter Pettigrew,Sirius Black,Minerva McGonagall,Severus Snape,Neville Longbottom',
        worksAdditionalTags: 'Wrong Boy-Who-Lived (Harry Potter),Alternate Universe - Canon Divergence,Magical Theory (Harry Potter),Abusive Dursley Family (Harry Potter),Pureblood Culture (Harry Potter),Worldbuilding,Parseltongue,some bashing,Independent Harry Potter,Powerful Harry Potter,Wizarding Politics (Harry Potter),Occlumency,Legilimency',
        worksLanguage: 'English',
        worksSummary: 'Harry Potter was Sorted into Slytherin after a crappy childhood. His brother Jim is believed to be the BWL. Think you know this story? Think again. Year Three (Harry Potter and the Death Eater Menace) starts on 9/1/16. NO romantic pairings prior to Fourth Year. Basically good Dumbledore and Weasleys. Limited bashing (mainly of James).',
        worksStatus: 'Completed',
        worksLastUpdated: '2018-08-28',
        worksPublished: '2018-08-28',
        worksLength: '108,645',
        worksChapters: '34',
        worksRating: 'Teen And Up Audiences',
        worksKudos: '4,254',
        worksBookmarks: '637',
        worksComments: '694',
        worksHits: '147,851'
      }

    // const response: any = await fic.fetchWorksMetadata(worksUrl, params);
    return fic.fetchWorksMetadata(worksUrl, params).then((response: any)=> {
        const assertVal = (response.worksName == expectedResponse.worksName);
        console.log("assertVal",assertVal)
        assert.isTrue(assertVal);
      });
//     try {
//         const response: any = await fic.fetchWorksMetadata(worksUrl, params);
//         const assertVal = (response.worksName == expectedResponse.worksName);
//         console.log("assertVal",assertVal)
//         assert.isTrue(assertVal);
//       }  catch (error) {
//         console.error('Test failed: ', error);
//         throw error;
//       }
//   });
    })
});