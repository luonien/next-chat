import { IChat } from '@/types/chat'
import { useMemo, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdCheck, MdClose, MdDeleteOutline } from 'react-icons/md'
import { groupByDate } from '@/common/util'
import { PiChatBold, PiTrashBold } from 'react-icons/pi'
export default function ChatList() {
  const [chatList, setChatList] = useState<IChat[]>([
    {
      id: '1',
      title: 'React入门实战教程',
      updateTime: Date.now(),
    },
    {
      id: '2',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '3',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '4',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '5',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '6',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '7',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '8',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '9',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '10',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '11',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '12',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '13',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
      id: '14',
      title: '如何使用Next.js创建React项目',
      updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
    },
    {
        id: '16',
        title: '如何使用Next.js创建React项目',
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
      },
      {
        id: '16',
        title: '如何使用Next.js创建React项目',
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
      },    {
        id: '16',
        title: '如何使用Next.js创建React项目',
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
      },    {
        id: '16',
        title: '如何使用Next.js创建React项目',
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
      },
      {
        id: '17',
        title: '如何使用Next.js创建React项目',
        updateTime: Date.now() - 1000 * 60 * 60 * 24 * 2,
      },
    {
      id: '15',
      title: '知行小课',
      updateTime: Date.now() + 2,
    },
  ])
  const [selectedChat, setSelectedChat] = useState<IChat>()
  const groupList = useMemo(() => {
    return groupByDate(chatList)
  }, [chatList])
  return (
    <div  className='flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto h-full'>
      {groupList.map(([date, list]) => {
        return (
          <div key={date} >
            <div className='sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500'>{date}</div>
            <ul>
              {list.map(item => {
                const isSelected = selectedChat?.id === item.id
                return (
                  <li
                    key={item.id}
                    className={`group flex items-center p-3 space-x-3 cursor-pointer rounded-md hover:bg-gray-800 ${
                      isSelected ? 'bg-gray-800' : ''
                    } `}
                    onClick={() => setSelectedChat(item)}
                  >
                    <div>
                      <PiChatBold />
                    </div>
                    <div className=' relative flex-1 whitespace-nowrap overflow-hidden '>
                      {item.title}
                      <span
                        className={`group-hover:from-gray-800 absolute right-0 inset-y-0 w-8 bg-gradient-to-l ${
                          isSelected ? 'from-gray-800' : 'from-gray-900'
                        }`}
                      ></span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
