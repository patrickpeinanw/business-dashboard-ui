import { CorpTypeCd } from '@bcrs-shared-components/enums'
import { GetCorpFullDescription } from '@bcrs-shared-components/corp-type-module/corp-type-module'

// FUTURE: this object needs an interface or type
export const BusinessConfigGp = {
  entityType: CorpTypeCd.PARTNERSHIP,
  displayName: GetCorpFullDescription(CorpTypeCd.PARTNERSHIP),
  flows: [
    {
      feeCode: null,
      displayName: 'Change Of Address',
      certifyText: ''
    },
    {
      feeCode: null,
      displayName: 'Annual Report',
      certifyText: ''
    },
    {
      feeCode: null,
      displayName: 'Change Of Directors',
      certifyText: ''
    }
  ],
  obligations: {
    title: 'Obligations:',
    subtitle: 'Changes include:',
    act: 'Partnership Act',
    obligationStatement: 'to keep the information about your firm up to date with the Registrar. Please update ' +
      'changes as they occur. ',
    detailInfoURL: 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/' +
      'permits-licences/businesses-incorporated-companies/proprietorships-partnerships',
    includedChanges: [
      {
        label: 'Business name changes',
        description: 'changing the name of your business will also require a new Name Request.'
      },
      {
        label: 'Business address changes',
        description: 'change the delivery address and mailing address of your business.'
      },
      {
        label: 'Proprietor/Partner address or legal name changes ',
        description: 'change the legal name or mailing and delivery addresses of an existing Proprietor or Partner.'
      },
      {
        label: 'Membership of Partnership changes ',
        description: 'change the partners of your General Partnership.'
      },
      {
        label: 'Nature of business changes',
        description: 'significant changes to the nature of your business.'
      },
      {
        label: 'Dissolving a Sole Proprietorship or Partnership ',
        description: 'when a business is no longer required it needs to be dissolved.'
      }
    ]
  },
  dissolutionConfirmation: {
    entityTitle: 'General Partnership',
    subTitle: 'a registered business',
    act: 'Partnership',
    modalTitle: 'Dissolution',
    confirmButtonText: 'Continue with Dissolution',
    additionalLabel: 'Make sure your business information is up to date before dissolving.',
    dissolutionType: 'dissolve'
  },
  todoList: {
    title: 'Dissolution'
  }
}
