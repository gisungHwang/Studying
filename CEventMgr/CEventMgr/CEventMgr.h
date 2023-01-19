#pragma once
class CEventMgr
{
public:
	CEventMgr();
	~CEventMgr();

	CEvent* m_PtrEvent;

	std::list<CEvent*>m_EventList;

	void addEvent(float arg_time_gap);


	

};

