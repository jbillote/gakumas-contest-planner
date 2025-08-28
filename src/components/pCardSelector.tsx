import { PCardIcon } from "./pCardIcon"
import { PrismaClient } from "@/generated/prisma"

import { typeFromDBString } from "@/lib/cardTypes"
import { rarityFromString } from "@/lib/rarity"

import Image from "next/image"
import FreePlan from "../../public/icon_plan_common.webp"
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

async function loadCards() {
    const prisma = new PrismaClient()
    const cards = await prisma.pCard.findMany({
        select: {
            id: true,
            filename: true,
            name: true,
            type: true,
            plan: true,
            rarity: true,
            customCharacter: true
        }
    })
    return cards
}

export async function PCardSelector() {
    const cards = await loadCards()
    return (
        <>
            <div className="justify-center align-center overflow-auto flex-1">
                <div className="gap-1 justify-center align-center box-border py-2 flex flex-wrap">
                    {
                        cards.map((card) => (
                            <PCardIcon
                                pCard={{
                                    id: `${card.filename}${card.customCharacter ? '-jsna' : ''}`,
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
                            src={FreePlan}
                            alt="FREE"
                            className="size-8 cursor-pointer hover:outline-solid"
                        />
                        <Image
                            src={SensePlan}
                            alt="FREE"
                            className="size-8 cursor-pointer hover:outline-solid"
                        />
                        <Image
                            src={LogicPlan}
                            alt="FREE"
                            className="size-8 cursor-pointer hover:outline-solid"
                        />
                        <Image
                            src={AnomalyPlan}
                            alt="FREE"
                            className="size-8 cursor-pointer hover:outline-solid"
                        />
                    </div>
                </div>
                <div className="rounded-md bg-accent flex flex-wrap w-full p-2">
                    <Image
                        src={SDSaki}
                        alt="花海咲季"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDTemari}
                        alt="月村手毬"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDKotone}
                        alt="藤田ことね"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDMao}
                        alt="有村麻央"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDLilja}
                        alt="葛城リーリヤ"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDChina}
                        alt="倉本千奈"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDSumika}
                        alt="紫雲清夏"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDHiro}
                        alt="篠澤広"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDSena}
                        alt="十王星南"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDMisuzu}
                        alt="秦谷美鈴"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDUme}
                        alt="花海佑芽"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                    <Image
                        src={SDRinami}
                        alt="姫崎莉波"
                        className="size-8 cursor-pointer hover:outline-solid"
                    />
                </div>
            </div>
        </>
    )
}
