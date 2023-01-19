#pragma once
class CEventFire : public CEvent
{
public:
	CEventFire();
	~CEventFire();
	
	int m_Number;


	void doExec() override;

};

class CEventFire
{
public:
	CEventFire();
	~CEventFire();
};

