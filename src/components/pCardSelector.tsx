"use client"

import { PCard } from "@/generated/prisma"
import { PIdol, PIdols } from "@/lib/pIdols"
import { Plan } from "@/generated/prisma"
import { PCardIcon } from "./pCardIcon"

import { loadCardsFromDB } from "@/lib/fetchCards"
import { typeFromDBString } from "@/lib/cardTypes"
import { rarityFromString } from "@/lib/rarity"

import Image from "next/image"
import SensePlan from "../../public/icon_plan_plan1.webp"
import LogicPlan from "../../public/icon_plan_plan2.webp"
import AnomalyPlan from "../../public/icon_plan_plan3.webp"
import SDSaki from "../../public/sd_icons/img_sd_hski_face-00.webp"
import SDTemari from "../../public/sd_icons/img_sd_ttmr_face-00.webp"
import SDKotone from "../../public/sd_icons/img_sd_fktn_face-00.webp"
import SDMao from "../../public/sd_icons/img_sd_amao_face-00.webp"
import SDLilja from "../../public/sd_icons/img_sd_kllj_face-00.webp"
import SDChina from "../../public/sd_icons/img_sd_kcna_face-00.webp"
import SDSumika from "../../public/sd_icons/img_sd_ssmk_face-00.webp"
import SDHiro from "../../public/sd_icons/img_sd_shro_face-00.webp"
import SDSena from "../../public/sd_icons/img_sd_jsna_face-00.webp"
import SDMisuzu from "../../public/sd_icons/img_sd_hmsz_face-00.webp"
import SDUme from "../../public/sd_icons/img_sd_hume_face-00.webp"
import SDRinami from "../../public/sd_icons/img_sd_hrnm_face-00.webp"

import { startTransition, useEffect, useState } from "react"

export function PCardSelector() {
    const [currentPlan, setCurrentPlan] = useState(Plan.LOGIC as Plan)
    const [currentCharacter, setCurrentCharacter] = useState(PIdols.Sena as PIdol)
    const [cards, setCards] = useState([] as PCard[])

    useEffect(() => {
        (async () => {
            const cards = await loadCardsFromDB(currentPlan)
            setCards(cards)
        })()
    }, [])

    function applyPlan(plan: Plan) {
        startTransition(async () => {
            const cards = await loadCardsFromDB(plan)
            setCards(cards)
        })
        setCurrentPlan(plan)
    }

    return (
        <>
            <div className="justify-center align-center overflow-auto flex-1">
                <div className="gap-1 justify-center align-center box-border py-2 flex flex-wrap">
                    {
                        cards.map((card) => (
                            <PCardIcon
                                pCard={{
                                    id: `${card.filename}${card.customCharacter ? currentCharacter : ''}`,
                                    enhanced: false,
                                    type: typeFromDBString(card.type),
                                    rarity: rarityFromString(card.rarity)
                                }}
                                key={card.id}
                            />
                        ))
                    }
                </div >
            </div>
            <div className="h-21 flex gap-1">
                <div className="flex gap-4">
                    <div className="rounded-md bg-accent flex flex-wrap p-2 gap-1 w-21">
                        <Image
                            src={SensePlan}
                            alt="FREE"
                            className="size-8 cursor-pointer hover:bg-gray-500"
                            onClick={() => applyPlan(Plan.SENSE)}
                        />
                        <Image
                            src={LogicPlan}
                            alt="FREE"
                            className="size-8 cursor-pointer hover:bg-gray-500"
                            onClick={() => applyPlan(Plan.LOGIC)}
                        />
                        <Image
                            src={AnomalyPlan}
                            alt="FREE"
                            className="size-8 cursor-pointer hover:bg-gray-500"
                            onClick={() => applyPlan(Plan.ANOMALY)}
                        />
                    </div>
                </div>
                <div className="rounded-md bg-accent flex flex-wrap w-full p-2 ">
                    <Image
                        src={SDSaki}
                        alt="花海咲季"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Saki) }}
                    />
                    <Image
                        src={SDTemari}
                        alt="月村手毬"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Temari) }}
                    />
                    <Image
                        src={SDKotone}
                        alt="藤田ことね"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Kotone) }}
                    />
                    <Image
                        src={SDMao}
                        alt="有村麻央"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Mao) }}
                    />
                    <Image
                        src={SDLilja}
                        alt="葛城リーリヤ"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Lilja) }}
                    />
                    <Image
                        src={SDChina}
                        alt="倉本千奈"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.China) }}
                    />
                    <Image
                        src={SDSumika}
                        alt="紫雲清夏"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Sumika) }}
                    />
                    <Image
                        src={SDHiro}
                        alt="篠澤広"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Hiro) }}
                    />
                    <Image
                        src={SDSena}
                        alt="十王星南"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Sena) }}
                    />
                    <Image
                        src={SDMisuzu}
                        alt="秦谷美鈴"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Misuzu) }}
                    />
                    <Image
                        src={SDUme}
                        alt="花海佑芽"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Ume) }}
                    />
                    <Image
                        src={SDRinami}
                        alt="姫崎莉波"
                        className="size-8 cursor-pointer hover:bg-gray-500"
                        onClick={() => { setCurrentCharacter(PIdols.Rinami) }}
                    />
                </div>
            </div>
        </>
    )
}
