import React from 'react'
import InputLine from '../UI/InputLine'
import useSWR from 'swr'

export default function DetailCard({ person, account }) {
    const findUserById = (Id) => {
        if (Id === null || Id === "" || Id === 0) return null
        else {
            const { data: user, error } = useSWR(`http://localhost:8080/member/get-by-id-member?id=${Id}`)
            if (!user) return null
            return user?.fullName
        }
    }
    return (
        <>
            <div className="grid grid-cols-1 px-6 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <InputLine
                    {...{
                        data: person?.fullName,
                        className: "sm:col-span-3",
                        title: "Họ Tên",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.gender,
                        className: "sm:col-span-1",
                        title: "Giới tính",
                    }}
                ></InputLine>
                <InputLine
                    {...{
                        data: person?.role,
                        className: "sm:col-span-2",
                        title: "Vai trò",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.dateOfBirth,
                        className: "sm:col-span-3",
                        title: "Ngày sinh",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.mobilePhoneNumber,
                        className: "sm:col-span-3",
                        title: "Số điện thoại",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.career,
                        className: "sm:col-span-3",
                        title: "Nghề nghiệp",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.education,
                        className: "sm:col-span-3",
                        title: "Bằng cấp",
                    }}
                ></InputLine>

                <div className="sm:col-span-4"></div>

                <InputLine
                    {...{
                        data: findUserById(person?.dadId),
                        className: "sm:col-span-3",
                        title: "Họ tên cha",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: findUserById(person?.momId),
                        className: "sm:col-span-3",
                        title: "Họ tên mẹ",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.maritalStatus,
                        className: "sm:col-span-3",
                        title: "Tình trạng hôn nhân",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: findUserById(person?.partnerId),
                        className: "sm:col-span-3",
                        title: "Họ tên vợ/chồng",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.status === "Đã mất" ? "Đã mất" : "",
                        className: "sm:col-span-3",
                        title: "Trạng thái",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.dateOfDeath,
                        className: "sm:col-span-3",
                        title: "Ngày mất",
                    }}
                ></InputLine>

                <InputLine
                    {...{
                        data: person?.burialPlace,
                        className: "sm:col-span-6",
                        title: "Nơi an táng",
                    }}
                ></InputLine>
            </div>
        </>
    )
}
