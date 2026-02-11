import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { graphqlClient } from '@/lib/graphqlClient'

const PCARD_QUERY = gql`
  pCards($plan: Plan) {
    id
    filename
    name
    type
    plan
    rarity
    support
    cost
    customCharacter
  }
`

type PCard = {
	id: number
	filename: string
	name: string
	type: string
	plan: string
	rarity: string
	support: boolean
	cost: string
	customCharacter: boolean
}

type PCardResponse = {
	pcards: PCard[]
}

type PCardVariables = {
	plan: string
}

function usePCards(plan: string) {
	return useQuery({
		queryKey: ['pcards', plan],
		queryFn: async () => {
			const data = await graphqlClient.request<PCardResponse, PCardVariables>(PCARD_QUERY, { plan })
			return data.pcards
		}
	})
}

export { usePCards }
