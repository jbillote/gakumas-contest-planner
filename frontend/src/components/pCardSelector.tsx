'use client'

import SensePlan from '@/assets/icon_plan_plan1.webp'
import LogicPlan from '@/assets/icon_plan_plan2.webp'
import AnomalyPlan from '@/assets/icon_plan_plan3.webp'
import SDMao from '@/assets/sd_icons/img_sd_amao_face-00.webp'
import SDKotone from '@/assets/sd_icons/img_sd_fktn_face-00.webp'
import SDMisuzu from '@/assets/sd_icons/img_sd_hmsz_face-00.webp'
import SDRinami from '@/assets/sd_icons/img_sd_hrnm_face-00.webp'
import SDSaki from '@/assets/sd_icons/img_sd_hski_face-00.webp'
import SDUme from '@/assets/sd_icons/img_sd_hume_face-00.webp'
import SDSena from '@/assets/sd_icons/img_sd_jsna_face-00.webp'
import SDChina from '@/assets/sd_icons/img_sd_kcna_face-00.webp'
import SDLilja from '@/assets/sd_icons/img_sd_kllj_face-00.webp'
import SDHiro from '@/assets/sd_icons/img_sd_shro_face-00.webp'
import SDSumika from '@/assets/sd_icons/img_sd_ssmk_face-00.webp'
import SDTemari from '@/assets/sd_icons/img_sd_ttmr_face-00.webp'
import { usePCards } from '@/hooks/usePcard'
import { PIdol, PIdols } from '@/lib/pIdols'
import Image from 'next/image'
import { useState } from 'react'
import { PCardIcon } from './pCardIcon'

export function PCardSelector({ selectPCard }) {
  const [currentPlan, setCurrentPlan] = useState('SENSE')
  const [currentCharacter, setCurrentCharacter] = useState(PIdols.Sena as PIdol)

  const { data } = usePCards(currentPlan)
  const cards = data ?? []

  return (
    <>
      <div className="align-center flex-1 justify-center overflow-auto">
        <div className="align-center box-border flex flex-wrap justify-center gap-1 py-2">
          {cards.map((card) => (
            <PCardIcon
              pCard={{
                id: `${card.filename}${card.customCharacter ? currentCharacter : ''}`,
                enhanced: false,
                type: card.type,
                rarity: card.rarity,
                selectPCard: selectPCard
              }}
              key={card.id}
            />
          ))}
        </div>
      </div>
      <div className="flex h-21 gap-1">
        <div className="flex gap-4">
          <div className="bg-accent flex w-21 flex-wrap gap-1 rounded-md p-2">
            <Image
              src={SensePlan}
              alt="FREE"
              className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
              onClick={() => setCurrentPlan('SENSE')}
            />
            <Image
              src={LogicPlan}
              alt="FREE"
              className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
              onClick={() => setCurrentPlan('LOGIC')}
            />
            <Image
              src={AnomalyPlan}
              alt="FREE"
              className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
              onClick={() => setCurrentPlan('ANOMALY')}
            />
          </div>
        </div>
        <div className="bg-accent flex w-full flex-wrap rounded-md p-2">
          <Image
            src={SDSaki}
            alt="花海咲季"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Saki)
            }}
          />
          <Image
            src={SDTemari}
            alt="月村手毬"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Temari)
            }}
          />
          <Image
            src={SDKotone}
            alt="藤田ことね"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Kotone)
            }}
          />
          <Image
            src={SDMao}
            alt="有村麻央"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Mao)
            }}
          />
          <Image
            src={SDLilja}
            alt="葛城リーリヤ"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Lilja)
            }}
          />
          <Image
            src={SDChina}
            alt="倉本千奈"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.China)
            }}
          />
          <Image
            src={SDSumika}
            alt="紫雲清夏"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Sumika)
            }}
          />
          <Image
            src={SDHiro}
            alt="篠澤広"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Hiro)
            }}
          />
          <Image
            src={SDSena}
            alt="十王星南"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Sena)
            }}
          />
          <Image
            src={SDMisuzu}
            alt="秦谷美鈴"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Misuzu)
            }}
          />
          <Image
            src={SDUme}
            alt="花海佑芽"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Ume)
            }}
          />
          <Image
            src={SDRinami}
            alt="姫崎莉波"
            className="size-8 cursor-pointer rounded-full hover:border-solid hover:bg-gray-500"
            onClick={() => {
              setCurrentCharacter(PIdols.Rinami)
            }}
          />
        </div>
        <div className="bg-accent full flex w-fit rounded-md p-2">
          <div className="align-center justify-center text-xs font-bold">ENHANCED</div>
          <div className="align-center justify-center">
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </>
  )
}
